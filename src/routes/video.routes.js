
import { verifyJWT } from '../middlewares/auth.middleware.js'
import { upload } from '../middlewares/multer.middleware.js';
import { deleteVideo, getAllVideos, getAllVideosByOption, getVideoById, publishAVideo, togglePublishStatus, updateVideo } from '../controllers/video.controller.js';
import { Router } from 'express';


const router = Router()

 // Apply verifyJWT middleware to all routes in this file

router.route("/all/option").get(getAllVideosByOption);

router
    .route("/")
    .get(getAllVideos)
    .post(
        verifyJWT
        ,upload.fields([
            {
                name: "videoFile",
                maxCount: 1,
            },
            {
                name: "thumbnail",
                maxCount: 1,
            },
            
        ]),
        publishAVideo
    );

router
    .route("/:videoId")
    .get(getVideoById)
    .patch(upload.single("thumbnail"), updateVideo)
    .delete(deleteVideo)

router.route("/toggle/publish/:videoId").patch(togglePublishStatus);

export default router;