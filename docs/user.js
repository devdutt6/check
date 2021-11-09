//SingUp
/**
 * @swagger
 * /signUp:
 *   post:
 *     summary: Sign-Up
 *     tags:
 *        - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                email:
 *                  type: string
 *                  example: "badrik@patel.com"
 *                password:
 *                  type: string
 *                  example: "Admin@1234"
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorised request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */

//SignIn
/**
 * @swagger
 * /signIn:
 *   post:
 *     summary: Sign-In
 *     tags:
 *        - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                email:
 *                  type: string
 *                  example: "badrik@patel.com"
 *                password:
 *                  type: string
 *                  example: "Admin@1234"
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorised request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */

//Refresh-Token
/**
 * @swagger
 * /refreshAccessToken:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Refresh-Token
 *     tags:
 *        - User-Refresh-Token
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorised request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */

//Forgot-Password
/**
 * @swagger
 * /forgotPasswordMail:
 *   post:
 *     summary: Forgot-Password
 *     tags:
 *        - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                email:
 *                  type: string
 *                  example: "badrik@patel.com"
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorised request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */

//Change-Password
/**
 * @swagger
 * /changePassword:
 *   post:
 *     summary: Change-Password (Via-Mail)
 *     tags:
 *        - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                newPassword:
 *                  type: string
 *                  example: "Admin@12345"
 *                oldPassword:
 *                  type: string
 *                  example: "Admin@1234"
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorised request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */

//Verify-Email (Via-Mail)
/**
 *
 * @swagger
 * /verifyMail:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Verify-Email (Via-Mail)
 *     tags:
 *        - User
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorised request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */

//UpdateProfile
/**
 * @swagger
 * /updateProfile:
 *   post:
 *     summary: Sign-Ip
 *     tags:
 *        - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                  type: string
 *                  example: "badrik"
 *                bio:
 *                  type: string
 *                  example: "badrik bad boi"
 *                twitter:
 *                  type: string
 *                  example: "@badrik_badboi"
 *                profilePhoto:
 *                  type: string
 *                  example: "http://any.link"
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorised request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */

//Change-Password (Via-Mail)
/**
 *
 * @swagger
 * /changePasswordLink:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Change-Password (Via-Mail)
 *     tags:
 *        - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                newPassword:
 *                  type: string
 *                  example: "Admin@1234"
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorised request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */

//Upload
/**
 * @swagger
 * /Upload:
 *   post:
 *     summary: upload Profile Photo
 *     tags:
 *        - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                file:
 *                  type: file
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorised request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */

//Create NFT
/**
 *
 * @swagger
 * /createNFT:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create NFT
 *     tags:
 *        - NFT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                nftLink:
 *                  type: string
 *                  example: "http://any.link"
 *                title:
 *                  type: string
 *                  example: "first NFT"
 *                price:
 *                  type: string
 *                  example: "1234"
 *                royalty:
 *                  type: string
 *                  example: "1234"
 *                attributeName:
 *                  type: string
 *                  example: "first"
 *                attributeValue:
 *                  type: string
 *                  example: "1234"
 *                description:
 *                  type: string
 *                  example: "this is 1234"
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorised request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */

//UploadNFT
/**
 * @swagger
 * /UploadNFT:
 *   post:
 *     summary: upload NFT
 *     tags:
 *        - NFT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                file:
 *                  type: file
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorised request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */