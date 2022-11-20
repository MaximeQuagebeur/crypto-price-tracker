import { React } from "react";
import HashLoader from "react-spinners/HashLoader";

const override = {
  display: "block",
  margin: "auto",
};

export default function Loader() {
  return (
    <div className="loader-container">
        <div className="sweet-loading">

            <HashLoader
                color="#111"
                loading
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    </div>
  )
}
