import React, { useEffect, useState } from "react";
import { Container, Wrapper, Title, Body, Heading } from "./style";
import axios from "axios";
import { message, Pagination } from "antd";
import { getPostsData } from "../../api";

const News = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPostsData().then((data) => {
      setPosts(data);
    });
  }, []);

  const data = [
    {
      id: 1,
      user_id: 3617,
      title:
        "Denego cariosus aedificium iste cultellus et clam assumenda beatus capillus quis vivo caput cibus conicio campana.",
      body: "Uberrime terminatio adicio. Magnam conservo pecunia. Admitto ventus bellicus. Ultio vorago tametsi. Deleniti quo voco. Confugo viduo utrum. Accedo clementia callide. Abduco quaerat consequatur. Nam compello vilitas. Aegre vicinus comedo. Unus terebro ver. Quibusdam amoveo terminatio. Spes culpa sortitus. Sit arbitro atqui. Pectus alter caveo. Quod ventito sollers. Vito accedo qui.",
    },
    {
      id: 2,
      user_id: 3616,
      title:
        "Autem viduata tenuis aqua depereo astrum avaritia desidero ara abstergo abundans avarus debeo accommodo conscendo turbo.",
      body: "Baiulus capio tracto. Arceo vesco aro. Modi via vulpes. Pauper auctus benigne. Illo caput calcar. Sumptus id stipes. Crux admoneo utpote. Soleo sub virtus. Antiquus deludo degenero. Conspergo absum aveho. Decor cuppedia dens. Ceno tabula maxime. Ratione aptus velum. Texo delibero balbus. Sequi verumtamen vinculum. Amicitia crur illo. Constans delinquo defaeco. Advenio amor celo.",
    },
    {
      id: 3,
      user_id: 3602,
      title:
        "Cribro damno atavus alienus deduco tempus color adsum tametsi ambitus vinco apto cultura.",
      body: "Cogo explicabo adficio. At qui nostrum. Angelus delicate id. Civis commodo tertius. Soleo despirmatio tempus. Tondeo absens dedecor. Cohors vicinus utrimque. Tamdiu surculus conscendo. Attero utroque consequatur. Ascisco aliquid adflicto. Stipes quas argentum. Bardus crastinus admoveo. Universe cribro comburo. Totam non aut. Sustineo ultio voluptatibus. Culpa solus quia. Comparo animi supellex. Unde ea tabgo. Viduo aspicio quibusdam. Clibanus stella sit. Bardus ara angulus.",
    },
    {
      id: 4,
      user_id: 3501,
      title:
        "Casso delectatio quia conqueror avarus demo asporto thymum vicinus atrocitas admiratio pecco tabesco sodalitas pauci turpis.",
      body: "Tibi temperantia ut. Tempore corpus decimus. Impedit velociter decor. Delicate in esse. Ut iusto sumptus. Viriliter decerno currus. Decretum virgo aeneus. Apto verbera id. Timor vel aptus. Credo carus demergo. Eaque facilis desparatus. Amissio peccatus voluptatem. Denuncio defigo cupressus. Pecus coaegresco sortitus. Studio aegrus attollo. Impedit vester subiungo. Subnecto timidus tempora. Molestiae adsidue amicitia. Acsi tergeo tero.",
    },
  ];

  return (
    <Container>
      {data.map(({ title, body, id }) => (
        <Wrapper key={id}>
          <Title>
            <Heading>Title:</Heading> {title}
          </Title>
          <Body>
            <Heading>Body:</Heading> {body}
          </Body>
        </Wrapper>
      ))}
    </Container>
  );
};

export default News;
