import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 50px;

  border: 1px solid black;
`;
export const Logo = styled.img`
  width: 390px;
  cursor: pointer;
`;
export const Tel = styled.a`
  text-decoration: none;
  color: black;
  font-size: 55px;
  line-height: 60px;
  font-weight: 700;
`;
export const Address = styled.p`
  margin: 0px 0 5px 0;
  font-size: 18px;
`;

// .header{
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin-top: 20px;
//     margin-bottom: 50px;
//     padding: 0 5px;
// }
// .logo{
//     width: 390px;
//     cursor: pointer;
// }
// .tel{
//     text-decoration: none;
//     color: black;
//     font-size: 55px;
//     line-height: 60px;
//     font-weight: 700;
// }
// .address{
//     margin: 0px 0 5px 0;
//     font-size: 18px;
// }

// @media (max-width:768px) {
//     .header{
//         margin-top: 10px;
//         margin-bottom: 15px;
//     }
//     .logo{
//         width: 170px;
//     }
//     .tel{
//         font-size: 25px;
//         line-height: 20px;
//     }
//     .address{
//         margin: 0px 0 1px 2px;
//         font-size: 8px;
//     }
// }
