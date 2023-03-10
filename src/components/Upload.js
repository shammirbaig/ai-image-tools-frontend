import React, { useState } from 'react';
import axios from 'axios';
import Navbar2 from './Navbar2';



function Upload() {
  const [previewImage, setPreviewImage] = useState('');
  const [processedImage, setProcessedImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', event.target.files[0]);

    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/image/upscale', formData);
      setProcessedImage(`data:image/png;base64,${response.data.base64}`);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      alert('File not uploaded');
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (<div>
    <Navbar2/>
    <div className="min-h-screen flex flex-col justify-between">
      <section className="text-center py-5">
        <div className="row">
          <div className="col-6 mx-auto">
            <h1 className="font-light text-3xl">Image Upscale</h1>
            <form encType="multipart/form-data" id="myform">
              <div className="mb-3">
                <label htmlFor="file" className="form-label">
                  Upload Image File
                </label>
                <input
                  className="form-control"
                  accept="image/*"
                  name="file"
                  type="file"
                  id="file"
                  onChange={handleImageUpload}
                />
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-warning" id="but_upload">
                  {isLoading ? (
                    <React.Fragment>
                      <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                      UpScaling...
                    </React.Fragment>
                  ) : (
                    'UpScale'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="gallery" className="row gy-3 justify-content-start gallery mt-3 mb-3">
        <div className="col-6 m-0 p-1 text-end">
          {previewImage && (
            <img
              id="img-preview"
              className="object-cover h-96"
              src={previewImage}
              alt="Preview"
            />
          )}
        </div>
        <div className="col-6 m-0 p-1 text-start">
          {processedImage && (
            <img
              id="img-processed"
              className="object-cover h-96"
              src={processedImage}
              alt="Processed"
            />
          )}
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-300 py-2">
        <div className="container mx-auto text-center">
          <p className="text-sm">Image Upscale App &copy; 2023</p>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default Upload;




































