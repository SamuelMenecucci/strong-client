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

export const InputMasks = {
  apply(input, func) {
    setTimeout(() => {
      input.value = InputMasks[func](input.value);
    }, 1);
  },
  CNPJMask(value) {
    value = value.replace(/\D/g, "");

    if (value.length > 14) value = value.slice(0, -1);

    value = value.replace(/(\d{2})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1/$2");
    value = value.replace(/(\d{4})(\d)/, "$1-$2");

    return value;
  },

  TelMask(value) {
    value = value.replace(/\D/g, "");
  },
};
