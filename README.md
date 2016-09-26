# item-image-processing

Generally, every item we sell has an image associated with it. There are three versions of the item image:

- a full-size image which is 475 pixels on its longest side
- a thumbnail image which is 175 pixels on its longest side
- an S2K preview image, which is a GIF 125 pixels square with a transparent background

This tool automatically generates these files and places them in the right folders for you. This tool can be **destructive**; you should read this file in full before using it.

## Setup
Clone the [item-image-processing tool](https://gitlab.com/my-fathers-world/item-image-processing) to your hard drive; I put mine in D:\\Item image processing\\. Open that folder in a command line and run `npm install`. You may also need to download and install [ImageMagick](http://imagemagick.org/script/index.php).

**Important:** Edit gulpfile.js and search it for `gulp.dest`. These are the destinations Gulp will send your completed files to. The first two should point to your local copy of the [Portal-SFTP server](https://gitlab.com/my-fathers-world/Portal-SFTP-server), in the /images/items/ folder. The third should point to `Z:\\MFW\\VAI\\Docs\\Images`, which is where S2K looks for item images. (Windows machines should use escaped backslashes in paths [`\\`] instead of forward slashes [`/`].)

## Usage
Let's say you want to update the image for item 00001. Copy the image you want to use into your item-image-processing folder and name it after the number of the item it represents--for example, 00001.png. (GIF and JPG files will be automatically converted to PNG.)

Now, open that folder in a command line and run `gulp`. The script will make three copies of the image:

- One will be resized to 475 pixels on its longest side and named with the "fs" suffix. This is your full-size image.
- One will be resized to 175 pixels on its longest side and named with the "t" suffix. This is your thumbnail image.
- One will be resized to 125 pixels square with a transparent background and converted to GIF. This is the image that will be shown in S2K.

All three images will be placed in the folders you specified during the Setup phase. **They will overwrite existing images without asking, and the original file you put in your item-image-processing folder will be deleted.** Since the images are being put into Git repositories, if you make a mistake you can always recover the old version. Don't give this script your only copy of an image!
