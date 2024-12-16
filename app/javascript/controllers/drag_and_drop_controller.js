import { Controller } from "@hotwired/stimulus";
import Dropzone from "dropzone";

export default class extends Controller {
  connect() {
    Dropzone.autoDiscover = false;

    const dropzoneElement = document.querySelector("#dropzone");

    const dropzone = new Dropzone(dropzoneElement, {
      url: "/documents",
      paramName: "document[files][]",
      maxFilesize: 5,
      acceptedFiles: ".pdf,.doc,.docx,.jpg,.png",
      addRemoveLinks: true,
      dictDefaultMessage: "Drag files here to upload",
      dictRemoveFile: "Delete",
    });

    dropzone.on("success", (file, response) => {
      file.serverId = response.id;
      console.log("File uploaded successfully:", response);
    });

    dropzone.on("error", (file, error) => {
      console.error("Error uploading file:", error);
    });

    dropzone.on("removedfile", (file) => {
      if (file.serverId) {
        fetch(`/documents/${file.serverId}`, {
          method: "DELETE",
          headers: {
            "X-CSRF-Token": document.querySelector("[name='csrf-token']").content,
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (response.ok) {
              console.log("File deleted successfully");
            } else {
              console.error("Failed to delete file");
            }
          })
          .catch((error) => {
            console.error("Error deleting file:", error);
          });
      } else {
        console.warn("No server ID for file. File was likely not uploaded.");
      }
    });
  }
}
