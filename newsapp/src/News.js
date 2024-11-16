import React, { Component } from 'react'
import { Newsitem } from './Newsitem'
export class News extends Component {
    articles=[
        {
       "source": {
       "id": "bbc-news",
       "name": "BBC News"
       },
       "author": "BBC News",
       "title": "Japan's Nankai Trough megaquake - can you predict it?",
       "description": "An alert issued this week has caught the attention of a country used to earthquake warnings.",
       "url": "https://www.bbc.co.uk/news/articles/cx2en927054o",
       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/624b/live/e630ea00-565c-11ef-8f0f-0577398c3339.jpg",
       "publishedAt": "2024-08-11T08:52:15.6452321Z",
       "content": "The system allows for either a warning or a lower-level alert to be sent out. Thursday was an alert, advising people to be prepared to evacuate.\r\nAnd, anecdotally, it seems to have worked. Even in a … [+1497 chars]"
       },
        {
       "source": {
       "id": "bbc-news",
       "name": "BBC News"
       },
       "author": "BBC News",
       "title": "Israel-Gaza war: Kamala Harris condemns civilian deaths in school strike",
       "description": "At least 70 people were killed in the strike Israel says targeted Hamas and Islamic Jihad militants.",
       "url": "https://www.bbc.co.uk/news/articles/cn0lx2xgn55o",
       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2ddd/live/621fd2c0-578e-11ef-b2d2-cdb23d5d7c5b.jpg",
       "publishedAt": "2024-08-11T08:22:19.8499849Z",
       "content": "Israel has attacked several such shelters in Gaza in the past few weeks.\r\nAccording to the United Nations, 477 out of 564 school buildings in Gaza have been directly hit or damaged as of 6 July, with… [+1245 chars]"
       },
        {
       "source": {
       "id": "bbc-news",
       "name": "BBC News"
       },
       "author": "BBC News",
       "title": "Banksy: Cat on Edgware Road billboard taken down",
       "description": "The billboard is in silhouette of a cat on an empty, distressed billboard in north-west London.",
       "url": "https://www.bbc.co.uk/news/articles/cjw3ld0l5ewo",
       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6068/live/1f4b5300-5713-11ef-ba53-8f3c1c8927ba.jpg",
       "publishedAt": "2024-08-11T08:22:16.2386149Z",
       "content": "Hours after Banksy confirmed the design was his in an Instagram post, crowds gathered from across London to see the piece before men, who said they were contractors, arrived.\r\nThe billboard had been … [+458 chars]"
       },
        {
       "source": {
       "id": "bbc-news",
       "name": "BBC News"
       },
       "author": "BBC News",
       "title": "The Hollywood Olympics: All you need to know about Los Angeles 2028",
       "description": "The new sporting events, the venues, the stars, and the traffic - what to watch out for in four years.",
       "url": "https://www.bbc.co.uk/news/articles/cn8lyrgxvdgo",
       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5f1d/live/d3cf6670-564d-11ef-aebc-6de4d31bf5cd.jpg",
       "publishedAt": "2024-08-11T08:07:14.6766102Z",
       "content": "The Los Angeles Olympics opening ceremony will take place on 14 July 2028, with the closing ceremony just over two weeks later, on 30 July.\r\nThe Paralympic opening ceremony will be on 15 August, and … [+1743 chars]"
       },
        {
       "source": {
       "id": "bbc-news",
       "name": "BBC News"
       },
       "author": "BBC News",
       "title": "How Kamala Harris's 'weird and free' messaging is striking through",
       "description": "Some political experts say calling Trump “weird” effectively repackages President Biden’s “threat to democracy” theme with a light touch.",
       "url": "https://www.bbc.co.uk/news/articles/cwyjl912z7po",
       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/e561/live/c1546060-574f-11ef-bfec-69c02f241172.jpg",
       "publishedAt": "2024-08-11T07:37:16.2543884Z",
       "content": "To upstage the former president, who only recently faced an assassination attempt, is no small feat, said Mr Polyansky.\r\nIts really pretty remarkable, he said.\r\nHer campaign appears further buoyed by… [+1505 chars]"
       },
        {
       "source": {
       "id": "bbc-news",
       "name": "BBC News"
       },
       "author": "BBC News",
       "title": "Celine Dion 'does not endorse' Trump's use of Titanic song",
       "description": "A clip of the artist singing My Heart Will Go On was played at one of President Donald Trump's rallies.",
       "url": "https://www.bbc.co.uk/news/articles/c8xlj48pl42o",
       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0623/live/d1b17ee0-5752-11ef-9c7e-35ef2139a255.jpg",
       "publishedAt": "2024-08-11T02:22:12.4335697Z",
       "content": "The statement said: \"Today, Celine Dion's management team and her record label, Sony Music Entertainment Canada Inc, became aware of the unauthorised usage of the video, recording, musical performanc… [+2234 chars]"
       },
        {
       "source": {
       "id": "bbc-news",
       "name": "BBC News"
       },
       "author": "BBC News",
       "title": "Raw-dogging on planes: Heroic or just plain stupid?",
       "description": "Some flyers are giving up in-flight entertainment and even drinking water but experts warn it could be dangerous.",
       "url": "https://www.bbc.co.uk/news/articles/c5y83kj3wg2o",
       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/39da/live/3ff04b70-5636-11ef-9d3c-3fe61554b2d2.png",
       "publishedAt": "2024-08-11T01:22:16.6493128Z",
       "content": "Last week, Damion Bailey posted on Instagram that he had just achieved his personal best a 13-and-a-half hour flight between Shanghai and Dallas without any in-flight entertainment, films, books or m… [+1062 chars]"
       },
        {
       "source": {
       "id": "bbc-news",
       "name": "BBC News"
       },
       "author": "BBC News",
       "title": "Leg-lengthening: 'I had surgery to get taller but then it went horribly wrong'",
       "description": "A £70,000 treatment gone wrong left the 49-year-old with years of treatment and mobility issues.",
       "url": "https://www.bbc.co.uk/news/articles/c0e8nd4z94jo",
       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/f49c/live/2a5202e0-5668-11ef-8e59-d7783847a3a0.png",
       "publishedAt": "2024-08-11T00:22:14.3401447Z",
       "content": "Elaine always hated her height.\r\n\"At 12, I was taller than most girls,\" she says. \"By 14, I was suddenly shorter than everyone. Over time it became an obsession. Taller means better. Taller means mor… [+1001 chars]"
       },
        {
       "source": {
       "id": "bbc-news",
       "name": "BBC News"
       },
       "author": "BBC News",
       "title": "Ukraine-Russia war: Zelensky confirms Ukrainian troops fighting across border",
       "description": "The Ukrainian president says his military is pushing the war \"on to the aggressor's territory\".",
       "url": "https://www.bbc.co.uk/news/articles/c5y87gk729do",
       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/946c/live/41ed1fa0-5764-11ef-95e4-a1d1be719b83.jpg",
       "publishedAt": "2024-08-10T23:37:13.6208305Z",
       "content": "Russia said that up to 1,000 Ukrainian troops, supported by tanks and armoured vehicles, entered the Kursk region on Tuesday morning.\r\nThe Ukrainians have since reportedly seized a number of villages… [+1809 chars]"
       },
        {
       "source": {
       "id": "bbc-news",
       "name": "BBC News"
       },
       "author": "BBC News",
       "title": "Trump campaign says its internal messages hacked by Iran",
       "description": "The claim, which the BBC has not independently verified, comes one day after a Microsoft report into Iranian hacking.",
       "url": "https://www.bbc.co.uk/news/articles/c4ge30ze4dpo",
       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/381c/live/bd3b31d0-5753-11ef-bb99-fd58f3ca3dff.jpg",
       "publishedAt": "2024-08-10T21:37:17.7138039Z",
       "content": "The campaign did not give any further details or any evidence linking the document leak to Iranian hackers or the Iranian government.\r\nIts statement came one day after Microsoft released a report ind… [+2153 chars]"
       }
       ]
    constructor(){
        super();
        console.log("hello i am constructour");
        this.state={
          articles:[],
          loding: false

        }
    }
   async componentDidMount(){
        let url="https://newsapi.org/v2/everything?q=tesla&from=2024-07-11&sortBy=publishedAt&apiKey=ef4c4fb685164947976209f1a0e03648";
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData)
        this.setState({articles:parsedData.articles})
    }
    handleNextClick = async()=>{
        let url=`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ef4c4fb685164947976209f1a0e03648=${this.state.page+1}`;
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData)
        this.setState({page:this.state.page+1, articles:parsedData.articles})
    }
    handlepreviClick = async()=>{
        let url=`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ef4c4fb685164947976209f1a0e03648=${this.state.page-1}`;
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({page:this.state.page-1, articles:parsedData.articles})
    }
  render() {
    return (
      <div className="container my-3">
       <h2>it is top headlines</h2>
       
       <div className="row">
        {this.state.articles.map((element)=>{
             return <div className="col-md-4" key={element.url} >
             <Newsitem title={element.title.slice(0,45)} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
        })}
       </div>
       <div className="container d-flex justify-content-between">
       <button disabled={this.state.page<=1} type="button" class="btn btn-primary"onClick={this.handlepreviClick}>&larr;previous</button>
       <button type="button" class="btn btn-primary" onClick={this.handleNextClick}>Next&rarr;</button>
       </div>
    </div>
    )
  }
}

export default News
