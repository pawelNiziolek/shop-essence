import React from "react";
import styled from "styled-components";

const DivSubs = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterAreaSub = () => {
  return (
    <DivSubs>
      <div>
        <h6>Subscribe</h6>
      </div>
      <div>
        <form action="#" method="post">
          <input type="email" name="mail" placeholder="Your email here" />
          <button type="submit">
            <i className="fa fa-long-arrow-right" aria-hidden="true" />
          </button>
        </form>
      </div>
    </DivSubs>
    // <div>
    //     <div>
    //         <div>
    //             <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
    //             <a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
    //             <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
    //             <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
    //             <a href="#" data-toggle="tooltip" data-placement="top" title="Youtube"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
    //         </div>
    //     </div>
    // </div>
  );
};

export default FooterAreaSub;
