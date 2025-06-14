export interface Item {
   img: string;
   title: string;
   description: string;
 }
 
 const items: Item[] = [
   {
     img: `${process.env.PUBLIC_URL}/images/5.png`,
     title: 'Пираты',
     description:
       'Внешняя мотивация (экстринсивная) — мотивация, не связанная с внешними по отношению к субъекту обстоятельствами.'
   },
   {
     img: `${process.env.PUBLIC_URL}/images/6.png`,
     title: 'Соколы',
     description:
       'Внутренняя мотивация (интринсивная) — мотивация, возникающая из интереса к самому процессу или деятельности.'
   },
   {
     img: `${process.env.PUBLIC_URL}/images/7.png`,
     title: 'Драконы',
     description:
       'Амбивертная мотивация — сочетание внешних и внутренних факторов, когда оба вида по-разному влияют на поведение.'
   }
 ];
 
 export default items;
 