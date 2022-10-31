import axios from "axios";

export default axios.create(
    {
        baseURL: 'https://api.yelp.com/v3/businesses',
        headers: {
            authorization: 'Bearer OgCr06BngjPcjsCSuzmAAIYBGLvQFTsB5n_Wjes63ERZDzWfLjopDUXH-ra7bayXcObvwNCyOr3fF1ejMw_yIYVFgZhFtKRb8mXsbhBPLyz3L1cy0Yd4OQTl0DNNY3Yx'
        }
    }
);