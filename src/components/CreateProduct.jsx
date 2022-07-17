const CreateProduct = () => {
  return (
    <div className="auth-wrapper">
      <div className="card auth-inner">
        <div>
          <div className="table-responsive px-md-4 px-2 pt-3">
            <form action="" method="post">
              <div className="mb-3">
                <img
                  src="https://images.pexels.com/photos/7322083/pexels-photo-7322083.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  class="w-25 h-auto rounded mx-auto d-block"
                  alt="product"
                />
              </div>
              <div className="mb-3">
                <input type="file" className="form-control" src="" alt="" />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Price"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Stock"
                />
              </div>
            </form>
            <br />
            <div className="d-flex ">
              <a type="button" className="btn btn-danger me-auto" href="/dashboard">
                Cancel
              </a>
              <a type="button" className="btn btn-success ms-auto">
                Save
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
