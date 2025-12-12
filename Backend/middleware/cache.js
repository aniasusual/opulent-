const { cacheHelper } = require('../utils/redisClient');

/**
 * Cache middleware for product listing
 * Generates cache key based on query parameters
 */
const cacheProducts = async (req, res, next) => {
    try {
        // Generate cache key from query parameters
        const queryString = JSON.stringify(req.query);
        const cacheKey = `products:${queryString}`;

        // Try to get cached data
        const cachedData = await cacheHelper.get(cacheKey);

        if (cachedData) {
            console.log(`Cache HIT for key: ${cacheKey}`);
            return res.json(cachedData);
        }

        console.log(`Cache MISS for key: ${cacheKey}`);

        // Store original res.json function
        const originalJson = res.json.bind(res);

        // Override res.json to cache the response
        res.json = (data) => {
            // Only cache successful responses
            if (data.status === 'success' && data.products) {
                cacheHelper.set(cacheKey, data, 300); // 5 minutes TTL
                console.log(`Cached data with key: ${cacheKey}`);
            }
            return originalJson(data);
        };

        next();
    } catch (error) {
        console.log('Cache middleware error:', error.message);
        next(); // Continue without caching on error
    }
};

/**
 * Cache middleware for single product
 * Generates cache key based on product ID
 */
const cacheProduct = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const cacheKey = `product:${productId}`;

        // Try to get cached data
        const cachedData = await cacheHelper.get(cacheKey);

        if (cachedData) {
            console.log(`Cache HIT for key: ${cacheKey}`);
            return res.json(cachedData);
        }

        console.log(`Cache MISS for key: ${cacheKey}`);

        // Store original res.json function
        const originalJson = res.json.bind(res);

        // Override res.json to cache the response
        res.json = (data) => {
            // Only cache successful responses
            if (data.success === true && data.product) {
                cacheHelper.set(cacheKey, data, 900); // 15 minutes TTL
                console.log(`Cached data with key: ${cacheKey}`);
            }
            return originalJson(data);
        };

        next();
    } catch (error) {
        console.log('Cache middleware error:', error.message);
        next(); // Continue without caching on error
    }
};

/**
 * Cache middleware for product reviews
 * Generates cache key based on product ID from query
 */
const cacheReviews = async (req, res, next) => {
    try {
        const productId = req.query.id;
        if (!productId) {
            return next();
        }

        const cacheKey = `reviews:product:${productId}`;

        // Try to get cached data
        const cachedData = await cacheHelper.get(cacheKey);

        if (cachedData) {
            console.log(`Cache HIT for key: ${cacheKey}`);
            return res.json(cachedData);
        }

        console.log(`Cache MISS for key: ${cacheKey}`);

        // Store original res.json function
        const originalJson = res.json.bind(res);

        // Override res.json to cache the response
        res.json = (data) => {
            // Only cache successful responses
            if (data.success === true && data.reviews) {
                cacheHelper.set(cacheKey, data, 600); // 10 minutes TTL
                console.log(`Cached data with key: ${cacheKey}`);
            }
            return originalJson(data);
        };

        next();
    } catch (error) {
        console.log('Cache middleware error:', error.message);
        next(); // Continue without caching on error
    }
};

module.exports = { cacheProducts, cacheProduct, cacheReviews };
