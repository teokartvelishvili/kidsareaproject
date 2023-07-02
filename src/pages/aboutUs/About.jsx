import "./About.css";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import boy from "./little-boy-playing-construction-toy-isolated-white-background-vector-illustration-kid-building-pyramid-blocks-188212129 1.png";
import father from "./tired-father-reading-book-his-son-parenting-stress-vector-illustration-white-background_223337-6325 1.png";

export default function About() {
  return (
    <div className="about">
      <div className="flex">
        <img src={father} className="fatherImg" />
        <p className="p1">
          <p className="marginP">
            {" "}
            ჩვენ ვიცით, რომ თითოეული ბავშვი არის უნიკალური და განსაკუთრებული და
            ადრეული ასაკის პოზიტიური გამოცდილება ბავშვის ზოგადი განვითარების
            საფუძველია, ამიტომ გვსურს დავეხმაროთ მშობლებს შესთავაზონ თავიანთ
            პატარებს მათი ინდივიდუალური თავისებურებების, ინტერესების,
            საჭიროებების შესაბამისი შესაძლებლობების დიდი არჩევანი.
          </p>
          <p className="middleP">
            ამისათვის ჩვენ შევქმენით ეს ონლაინ სივრცე, სადაც მშობლები მოიძიებენ
            მრავალფეროვან რესურსებსა და სერვისებს ბავშვზე ზრუნვისა და ბავშვის
            მრავალმხრივი – სოციალური, ფიზიკური,{" "}
          </p>
        </p>
      </div>{" "}
      <div className="flex flex2">
        <p className="lastP">
          ემოციური და ინტელექტუალური განვითარებისთვის. ჩვენ გვინდა ამ სივრცის
          გამოყენებით მშობლებმა შეძლონ მისცენ პატარებს ბევრი დადებითი
          გამოცდილება, ხელი შეუწყონ მათ უკეთ შეიცნონ თავიანთი თავი, მართონ
          საკუთარი ცხოვრება, გაუფრთხილდნენ გარემოს, გაიზარდონ ბედნიერ და კეთილ
          ადამიანებად და უკეთესობისკენ შეცვალონ მსოფლიო.
        </p>

        <img src={boy} className="boyImg" />
      </div>
    </div>
  );
}
