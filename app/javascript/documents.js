const dropzone = new Dropzone("#dropzone", {
  url: "/documents",
  paramName: "document[files]",
  maxFilesize: 10,
  addRemoveLinks: true,
  acceptedFiles: ".pdf,.doc,.docx,.txt,.jpg,.png",
  headers: {
    "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
  },
  autoProcessQueue: false,
});

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", () => {
  if (dropzone.getQueuedFiles().length > 0) {
    dropzone.processQueue();
  } else {
    console.log("No files to upload.");
  }
});

dropzone.on("success", (file, response) => {
  console.log("Successfully uploaded:", file);
});

dropzone.on("error", (file, errorMessage) => {
  console.error("Upload error:", file, errorMessage);
});
