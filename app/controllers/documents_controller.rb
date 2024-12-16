class DocumentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_document, only: [:show, :destroy, :delete_file]

  def new
    @document = Document.new
  end

  def create
    Rails.logger.debug params.inspect
    @document = Document.new
    @document.user = current_user

    if params[:document][:files]
      @document.files.attach(params[:document][:files])
    end

    if @document.save
      render json: { message: "Files uploaded successfully" }, status: :ok
    else
      render json: { error: "Failed to upload files" }, status: :unprocessable_entity
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
    file = @document.files.find(params[:file_id])
    if file
      file.purge
      render json: { message: "File deleted successfully" }, status: :ok
    else
      render json: { error: "File not found" }, status: :not_found
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
