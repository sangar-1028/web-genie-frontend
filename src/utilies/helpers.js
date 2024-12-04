export const RANDOM_INT = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
export const RANDOM_DECIMAL = (min, max) => Math.random() * (max - min) + min;
export const PASSWORD = 'password';
export const calculateSize = (width) => {
  if (width < 100) return width - 200;
  if (width < 600) return width;
  return width - 400;
};

export const imgToBase64 = async (image) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.split(',')[1];
      resolve(base64String);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(image);
  });
}