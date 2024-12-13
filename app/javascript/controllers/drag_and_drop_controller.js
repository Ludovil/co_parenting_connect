import { Controller } from "@hotwired/stimulus";
import Dropzone from "dropzone";

export default class extends Controller {
  connect() {
    Dropzone.autoDiscover = false;

    const dropzoneElement = document.querySelector("#dropzone");

    const dropzone = new Dropzone(dropzoneElement, {
      url: "/documents", // Route for file uploads
      paramName: "document[files][]", // Rails expects files in this format
      maxFilesize: 5, // Maximum file size in MB
      acceptedFiles: ".pdf,.doc,.docx,.jpg,.png", // Allowed file types
      addRemoveLinks: true,
      dictDefaultMessage: "Drag files here to upload",
      dictRemoveFile: "Delete", // Text for the remove link
    });

    // Handle successful upload
    dropzone.on("success", (file, response) => {
      // Assuming the server response contains the file's ID
      file.serverId = response.id;
      console.log("File uploaded successfully:", response);
    });

    // Handle errors during upload
    dropzone.on("error", (file, error) => {
      console.error("Error uploading file:", error);
    });

    // Handle file removal
    dropzone.on("removedfile", (file) => {
      if (file.serverId) {
        // Send DELETE request to the server
        fetch(`/documents/${file.serverId}`, {
          method: "DELETE",
          headers: {
            "X-CSRF-Token": document.querySelector("[name='csrf-token']").content, // CSRF token for Rails
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
