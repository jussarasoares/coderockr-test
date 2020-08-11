import React from 'react';

import Card from '../../components/Card';
import './styles.css';

function Home() {
  return (
    <div className="home">
      <div className="home__row">
        <Card
          className="home__post"
          title="Qui occaecati vero et quibusdam non"
          description="Saepe quia culpa vero. Velit numquam corporis nihil sint enim
          exercitationem. Rem nulla illum sint et id dolore voluptas"
          photo="https://s3-alpha-sig.figma.com/img/8d3c/b706/093786d925f03d240ff0caf5ec3c7aed?Expires=1598227200&Signature=Oln-~imlxM~~fHgD31wFvIK2bL5H~OpoudcxNZlMuRJVL7WIe9GxpWLeuB9M7l~dwGwgYenUUm~auSbMkN1GTjf-t5XZ~V6ptpXIaYvJnJvhPVCr6JQq5vRfWGR7Ul8U9Tco4n1r~KKWKkYIYkLTbzSLSHfTZUaOl4T7HcsE4DkZTS6MQJ-CMcu2SUnykHIhaM9X9-jXQWgbDr1ISaQYezfEMlWr9MFfBdjR97gSyXmHegKGtKSK5Q-p~n9u-j4v4DnKZioRiunrU5RKjqyL9OzlEmAMujPJ~L4p26WdZX2vQe~lOWHV6GGqIU1Xg6wpdY9bTUgEyx7zTMd-K6VlHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          author="Kelsi Monahan"
        />
        <Card
          className="home__post"
          title="Architecto quos rem unde quia accusantium"
          description="Voluptatum omnis et dolor architecto non totam aspernatur
          sapiente. Et accusantium rem. Assumenda quia error"
          photo="https://s3-alpha-sig.figma.com/img/397c/c7bf/a37dae360eaaf0580c527d2305336422?Expires=1598227200&Signature=PJucOSBoth3~kSLNMdNjvnYJtRTiJmG3ADXID5n1t4q5Ti1e4hoqB9Vu3-5Hyy0y9-zV1VZP~pClXcEUSJLGypV6S3u~-h4SMA1wYhDomM-tl128x6Vd0I8O95vIWTlu3i-n8q-AcmrDVVFj~BCboM1~O0yVxtnUQLy3bB~e2j8J7Po8ftwJCsrgZKLqXfZzbjIdwy7wwydTGA-S4wHn51sbjI88LajW0z6Mt3CYUZgErfySV~12ZuC-EG8AkXSyrctsl6kIgZVvdGg4bFkUcC99yhMnnbq-wu3ZtkTlTMtsiJpdpPZtBGbbd0hFqHzMBa9ZHUQQOR1jZ3aCiM8ENw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          author="Mrs. Alexanne Schneider"
        />
      </div>
      <div className="home__row">
        <Card
          className="home__post2"
          title="Repellat aliquam quo sit qui praesentium ut aliquid"
          description="Ea ut et labore quidem non sit in quidem. Provident est incidunt
          dignissimos enim qui consequatur numquam."
          photo="https://s3-alpha-sig.figma.com/img/2387/237e/7d7e75f574f43f33e307aa50aa867a99?Expires=1598227200&Signature=GbBIkJnFHx7isGyLNBRJenb8GmRYOFU-OccjjYw269~U6PPtYoRtzwjHj5fnJVPr0XxpI-n2s4GtzUUCacwwm9vZcH98kddmWAVHZytXyf8JVJcrXdb2BLfk6LwHMcaplRB4guEGrEWXyY9BKtLWSEOnCKgkxRUbW12QCjDPx5m6CJMZqHxxJru8~A7hGigmCbZZ5zR0A-FI1FPA-LqYwlbFC3-ZHwFYhOjdgdxhFzCjIX-4hrlOPdONnnYgzpKEzzZ-TiAtXXKjFt6MpXWBCrLHpaw0SkzLzTtt2QifVsE5m0uaEgL-juyFrMvJV5Ne-53rIM0mcFpRr8WNZNU~ZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          author="Dagmar Ankunding"
        />
      </div>
    </div>
  );
}

export default Home;
