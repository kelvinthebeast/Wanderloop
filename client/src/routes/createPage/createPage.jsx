import "./createPage.css";

const CreatePage = () => {
  return (
    <div className="createPage"> {/* Đây là div root của component */}
      <div className="createTop"> 
        <h1>Create Pin</h1> 
        <button>Publish</button> 
      </div>
      <div className="createBottom"> 
        <div className="upload">
          <div className="uploadTitle">
            <img src="/general/upload.svg" alt="Upload icon" /> {/* Đã thêm alt text */}
          </div>
          <div className="uploadInfo">
            we recommend using high quality .jpg file
          </div>
        </div>
        <form className="createForm"> 
          <div className="createFormItem"> 
            <label htmlFor="title">Title</label> 
            <input
              type="text"
              placeholder="Add a title"
              name="title"
              id="title"
            /> 
          </div>
          <div className="createFormItem"> 
            <label htmlFor="description">Description</label> 
            <input
              type="text"
              placeholder="Add a description"
              name="description"
              id="description"
            /> 
          </div>
          <div className="createFormItem"> 
            <label htmlFor="link">Link</label> 
            <input type="text" placeholder="Add a link" name="link" id="link" /> 
          </div>
          <div className="createFormItem"> 
            <label htmlFor="board">Board</label> 
            <select name="board" id="board"> 
              <option value="">Choose a board</option> {/* Đã thêm value="" */}
              <option value="1">Board 1</option> 
              <option value="2">Board 2</option> 
              <option value="3">Board 3</option> 
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;