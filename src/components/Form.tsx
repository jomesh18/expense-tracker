const Form = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input type="text" id="description" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input type="text" id="amount" className="form-control" />
      </div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Category
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Grocery
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Utilities
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Entertainment
            </a>
          </li>
        </ul>
      </div>
    </form>
  );
};

export default Form;
