import "../styles/Contacts.css";
import parse from "html-react-parser";

function Contacts(props) {
  return (
    <div id="contact">
      <div className="wrapper">
        <div className="footer">
          {props.contactsSection.map((item, index) => {
            return (
              <div className="footer-section" key={index}>
                {parse(item.content)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
