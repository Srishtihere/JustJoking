import { toast } from "react-toastify";

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  toast.success("Joke Copied Sucessfully", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export { copyToClipboard };
