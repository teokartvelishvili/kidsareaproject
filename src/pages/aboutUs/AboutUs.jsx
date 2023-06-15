import "./AboutUs.css";
import React from "react";
import Father from "../../components/image/tired-father-reading-book-his-son-parenting-stress-vector-illustration-white-background_223337-6325 1.png";
import LittleBoy from "../../components/image/little-boy-playing-construction-toy-isolated-white-background-vector-illustration-kid-building-pyramid-blocks-188212129 1.png";
function AboutUSPage() {
  return (
    <>
      <div className="container">
        <img src={Father} className="father-photo" />
        <img src={LittleBoy} className="boy-photo" />
      </div>
      <div className="text-container">
        <p>
          ჩვენ ვიცით, რომ თითოეული ბავშვი არის უნიკალური და განსაკუთრებული და
          ადრეული ასაკის პოზიტიური გამოცდილება ბავშვის ზოგადი განვითარების
          საფუძველია, ამიტომ გვსურს დავეხმაროთ მშობლებს შესთავაზონ თავიანთ
          პატარებს მათი ინდივიდუალური თავისებურებების, ინტერესების, საჭიროებების
          შესაბამისი შესაძლებლობების დიდი არჩევანი.
        </p>
        <p>
          მისათვის ჩვენ შევქმენით ეს ონლაინ სივრცე, სადაც მშობლები მოიძიებენ
          მრავალფეროვან რესურსებსა და სერვისებს ბავშვზე ზრუნვისა და ბავშვის
          მრავალმხრივი – სოციალური, ფიზიკური, {" "}
        </p>
        <p>
          ემოციური და ინტელექტუალური განვითარებისთვის. ჩვენ გვინდა ამ სივრცის
          გამოყენებით მშობლებმა შეძლონ მისცენ პატარებს ბევრი დადებითი
          გამოცდილება, ხელი შეუწყონ მათ უკეთ შეიცნონ თავიანთი თავი, მართონ
          საკუთარი ცხოვრება, გაუფრთხილდნენ გარემოს, გაიზარდონ ბედნიერ და კეთილ
          ადამიანებად და უკეთესობისკენ შეცვალონ მსოფლიო.
        </p>
      </div>
    </>
  );
}

export default AboutUSPage;