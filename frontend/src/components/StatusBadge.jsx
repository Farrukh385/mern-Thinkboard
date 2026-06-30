import Swal from "sweetalert2";

const StatusBadge = async ({
  title = "Are you sure?",
  text = "Are you sure you want to delete?",
  icon = "warning",
  confirmButtonText = "Yes",
  cancelButtonText = "Cancel",
}) => {
  return await Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText,

    background: "#2a1f1a",
    color: "#f5e6d3",

    confirmButtonColor: "#a67c52",
    cancelButtonColor: "#3f2d25",

    customClass: {
      popup: "rounded-xl shadow-lg",
      title: "text-lg font-semibold",
      confirmButton: "btn btn-primary",
      cancelButton: "btn btn-outline",
    },
  });
};

export default StatusBadge;
