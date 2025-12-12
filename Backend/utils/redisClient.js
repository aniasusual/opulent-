const redis = require('redis');

// Create Redis client
const redisClient = redis.createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379',
    socket: {
        reconnectStrategy: (retries) => {
            if (retries > 10) {
                console.log('Redis connection failed after 10 retries');
                return new Error('Redis connection failed');
            }
            return retries * 100; // Reconnect after retries * 100ms
        }
    }
});

// Handle Redis connection events
redisClient.on('connect', () => {
    console.log('Redis client connected');
});

redisClient.on('error', (err) => {
    console.log('Redis Client Error:', err);
});

redisClient.on('ready', () => {
    console.log('Redis client ready to use');
});

// Connect to Redis
(async () => {
    try {
        await redisClient.connect();
    } catch (error) {
        console.log('Failed to connect to Redis:', error.message);
    }
})();

// Helper functions for cache operations
const cacheHelper = {
    /**
     * Get data from cache
     * @param {string} key - Cache key
     * @returns {Promise<any|null>} - Parsed data or null
     */
    async get(key) {
        try {
            const data = await redisClient.get(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.log('Redis GET error:', error.message);
            return null;
        }
    },

    /**
     * Set data in cache with TTL
     * @param {string} key - Cache key
     * @param {any} value - Data to cache
     * @param {number} ttl - Time to live in seconds (default: 300 = 5 minutes)
     * @returns {Promise<boolean>} - Success status
     */
    async set(key, value, ttl = 300) {
        try {
            await redisClient.setEx(key, ttl, JSON.stringify(value));
            return true;
        } catch (error) {
            console.log('Redis SET error:', error.message);
            return false;
        }
    },

    /**
     * Delete a single key
     * @param {string} key - Cache key to delete
     * @returns {Promise<boolean>} - Success status
     */
    async del(key) {
        try {
            await redisClient.del(key);
            return true;
        } catch (error) {
            console.log('Redis DEL error:', error.message);
            return false;
        }
    },

    /**
     * Delete all keys matching a pattern
     * @param {string} pattern - Pattern to match (e.g., "products:*")
     * @returns {Promise<number>} - Number of keys deleted
     */
    async delPattern(pattern) {
        try {
            const keys = await redisClient.keys(pattern);
            if (keys.length > 0) {
                await redisClient.del(keys);
                return keys.length;
            }
            return 0;
        } catch (error) {
            console.log('Redis DEL pattern error:', error.message);
            return 0;
        }
    },

    /**
     * Clear all cache
     * @returns {Promise<boolean>} - Success status
     */
    async flushAll() {
        try {
            await redisClient.flushAll();
            return true;
        } catch (error) {
            console.log('Redis FLUSHALL error:', error.message);
            return false;
        }
    }
};

module.exports = { redisClient, cacheHelper };
