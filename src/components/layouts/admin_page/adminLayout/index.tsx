// import Button from "@/element/button";
// import LoadingSpinner from "@/element/loadingSpinner";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";
// import React from "react";
// import { BsArrowRight } from "react-icons/bs";
// import styled from "styled-components";
// import Login from "./Login";

// const AdminLayout: React.FC = () => {
//   const router = useRouter();
//   const { data: session, status } = useSession();

//   const Content = () => {
//     if (status === "loading") {
//       return <LoadingSpinner />;
//     }

//     if (!session || status === "unauthenticated") return <Login />;

//     return <></>;
//   };

//   return (
//     <>
//       <Wrapper className="component-inner-gap">
//         <div className="custom-container">
//           <Button
//             textBtn={true}
//             onClickHandler={() => router.replace("/")}
//             name="back to home"
//             Icon={BsArrowRight}
//           />
//           <Container>
//             <Content />
//           </Container>
//         </div>
//       </Wrapper>
//     </>
//   );
// };

// export default AdminLayout;

// const Wrapper = styled.div``;

// const Container = styled.div``;

import React from "react";

export default function AdminLayout() {
  return <div>AdminLayout</div>;
}
