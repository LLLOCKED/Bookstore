import {BookImage, Content, Image, Preview, Text, TextDiv} from "../styles";
import image from "../assets/various-book-books.jpg";
import imageBook from "../assets/cover.jpg";
import imageYakaboo from "../assets/yakaboo.png";

const About = () => {

    return (<Content>
        <Preview image={image}>
            <TextDiv>
                <Text>Купування книг це завжди добре</Text>
            </TextDiv>
            <BookImage>
                <Image src={imageBook} alt="bool"></Image>
            </BookImage>
        </Preview>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px"}}>
            <h2>Ми співпрацюємо з багатьма компаніями з різних куточків світу</h2>
            <ul style={{
                listStyleType: "none",
                margin: "0",
                padding: "0",
                display: "flex",
                justifyContent: "center",
                width: "600px"
            }}>
                <li><img width={250} src={imageYakaboo} /></li>
            </ul>
        </div>
        <div style={{display: "flex", justifyContent: "center", marginTop: "100px", marginBottom: "100px"}}>
            <ul style={{
                listStyleType: "none",
                margin: "0",
                padding: "0",
                display: "flex",
                justifyContent: "center",
                width: "90%",
                fontSize: "18px"
            }}>
                <li style={{width: "33%"}}><h3>Зручність</h3>
                    <span>Дизайн інтернет магазину створений для зручного використання користувачем з будь-яких пристроїв</span>
                </li>
                <li style={{width: "33%"}}><h3>Пропозиції</h3>
                    <span>Наш інтернет магазин пропонує покупцям вибір з 100 000 книг</span></li>
                <li style={{width: "33%"}}><h3>Ціни</h3>
                    <span>Ціни на книги набагато нище чим в наших конкурентах</span></li>
            </ul>
        </div>
    </Content>);
};


export default About;