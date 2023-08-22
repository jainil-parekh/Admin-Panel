import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { MdPublish } from "react-icons/md";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Active</span>
              <span className="productInfoValue">Yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">In Stock</span>
              <span className="productInfoValue">Yes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpods" />
            <label>In Stock</label>
            <select name="instock" id="idstock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <MdPublish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
