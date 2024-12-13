class DocumentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_document, only: [:show, :destroy, :delete_file]

  def new
    @document = current_user.documents.new
  end

  def create
    @document = current_user.documents.new(document_params)
    if @document.save
      redirect_to documents_path, notice: 'Document uploaded successfully.'
    else
      render :new, alert: 'Failed to upload document.'
    end
  end

  def index
    @documents = current_user.documents
  end

  def show
    @document
  end

  def destroy
    if @document.destroy
      redirect_to documents_path, notice: 'Document deleted successfully.'
    else
      redirect_to documents_path, alert: 'Failed to delete the document.'
    end
  end

  def delete_file
    file = @document.files.find_by(file_id: params[:file_id])
    if file
      file.purge # Delete the file
      redirect_to document_path(@document), notice: "File deleted successfully."
    else
      redirect_to document_path(@document), alert: "File not found."
    end
  end

  private

  def set_document
    @document = current_user.documents.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    redirect_to documents_path, alert: 'Document not found.'
  end

  def document_params
    params.require(:document).permit(files: [])
  end
end
