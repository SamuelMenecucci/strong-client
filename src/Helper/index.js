export const PhotosUpload = {
  handleProfilePicture(event) {
    const { files: fileList } = event.target;

    PhotosUpload.input = event.target;

    const reader = new FileReader();

    reader.onload = () => {
      const image = document.getElementById("profileTag");

      image.src = String(reader.result);
    };

    reader.readAsDataURL(fileList[0]);
  },
};
