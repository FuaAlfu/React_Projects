function Footer() {
    const date = new Date().getFullYear();
    return (
    <div>
      <div 
      style={{display:"inline-block",padding:"10px 20px",backgroundColor:"#F8F8F9"}}>
      <img src="logo.png" />
      </div>
      <div style={{float: "right"}}>
       <h6>Copyright - {date}</h6>
      </div>
    </div>
    );
    }