import React from "react";
import styles from "./about.module.scss";
import { Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container className={styles.container}>
        <Row>
          <h1 className="py-3 text-center">About Us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem rem assumenda ab delectus unde quibusdam iure ex temporibus ipsam a praesentium sint ipsa, tenetur ut id mollitia eveniet, voluptatibus sed!
            Facilis aut minima rem hic voluptas eaque tenetur odio ullam unde architecto, perspiciatis mollitia facere neque repellat pariatur. Quibusdam aspernatur animi laudantium aperiam distinctio architecto cum nemo. Earum, neque et.
            Maxime recusandae architecto distinctio quisquam quia soluta odio voluptatum nulla voluptate quo quasi repellat corrupti doloribus unde tenetur mollitia iste facere, repellendus ipsam culpa officia nihil. Ut, magni dolorum. Obcaecati?
            Hic facilis omnis nesciunt facere deleniti minus natus ratione quam sequi repudiandae. Animi tempore non eligendi rerum, enim sapiente consequuntur illum minus distinctio obcaecati odit facere quia esse sint iure!
            Nisi, perspiciatis numquam? Alias, provident totam? Officiis error sed aspernatur inventore sequi rem optio voluptates! Deserunt, perferendis quisquam! Ad qui corrupti quo quia laborum doloribus enim maiores sit, commodi in.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat quae aut, accusamus odit culpa voluptate autem, qui assumenda nostrum reprehenderit delectus ab dolorem laudantium consequuntur mollitia vero? Iusto, officiis atque?
            Unde quod perspiciatis tenetur officiis atque dolorum, incidunt dolore quasi est amet! Fuga excepturi corporis incidunt, laborum asperiores animi ipsam dolorum iusto aperiam voluptatum eius, molestiae provident optio nostrum ab!
            Consequuntur dolore enim doloribus dolores nam velit aliquid dolorum totam hic tempora eius distinctio nisi, sapiente eveniet? Dicta, temporibus, tempora in dignissimos eum pariatur error consequuntur, esse dolorem tenetur ea.
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default About;
