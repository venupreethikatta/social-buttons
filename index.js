const Button = (props) => {
  //  Write your code here.
  return <button className="button ${className}"></button>;
};

const element = (
  //  Write your code here.
  <div className="social-buttons-container">
    <div className="content-container">
      <h1 className="heading">Social Button</h1>
      <div className="button-container">
        <Button buttonText="Like" className="like-button" />
        <Button buttonText="Comment" className="comment-button" />
        <Button buttonText="Share" className="share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
