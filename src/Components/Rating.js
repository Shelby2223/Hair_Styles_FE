import React, { Component } from "react";
import "./Rating.css";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Rating = () => {
    const { shop_id } = useParams();

    const userID = localStorage.getItem('userID');

    const [rating, setRating] = useState(0);
    const [isRated, setIsRated] = useState(false);
    const [comment, setComment] = useState("");
    
    const handleStarClick = (star) => {
      if (!isRated) {
        setRating(star);
        setIsRated(true);
      }
    };
  
    const handleChangeComment = (event) => {
      setComment(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const data = {
        rating_star: rating,
        comment: comment,
        user_id:userID,
        shop_id:shop_id ,
      };
      console.log(data);
      // Gửi dữ liệu lên API Laravel
      axios
        .post("http://127.0.0.1:8000/api/rating", data)
        .then((response) => {
          console.log(response.data);
          // Xử lý phản hồi từ Laravel nếu cần
        })
        .catch((error) => {
          console.log(error);
          // Xử lý lỗi nếu có
        });
  
      // Đặt lại giá trị trong form về rỗng
      setRating(0);
      setIsRated(false);
      setComment("");
    };
  
    const getStarColor = (starIndex) => {
      if (starIndex <= rating) {
        return "gold"; // Đổi màu thành màu vàng
      }
      return "white"; // Đổi màu thành màu trắng
    };
  
  return (
    <div className="container-wrapper">
      <section>
        <div className="start">
          <p className="title">Đánh giá chất lượng sản phầm </p>
          <div className="star">
            <a
              className={`fas fa-star s1`}
              style={{ color: getStarColor(1) }}
              onClick={() => handleStarClick(1)}
            ></a>
            <a
              className={`fas fa-star s2`}
              style={{ color: getStarColor(2) }}
              onClick={() => handleStarClick(2)}
            ></a>
            <a
              className={`fas fa-star s3`}
              style={{ color: getStarColor(3) }}
              onClick={() => handleStarClick(3)}
            ></a>
            <a
              className={`fas fa-star s4`}
              style={{ color: getStarColor(4) }}
              onClick={() => handleStarClick(4)}
            ></a>
            <a
              className={`fas fa-star s5`}
              style={{ color: getStarColor(5) }}
              onClick={() => handleStarClick(5)}
            ></a>
          </div>
        </div>
        <div className="comment">
          <form id="myForm" onSubmit={handleSubmit}>
            <label htmlFor="textArea">Nhập nội dung đánh giá:</label>
            <br />
            <textarea
              id="textArea"
              name="myText"
              rows={4}
              cols={50}
              value={comment}
              onChange={handleChangeComment}
            />
            <br />
            <br />
            <input type="submit" value="Gửi" />
          </form>
        </div>
      </section>
      <section>
        <div className="show_detail">
          <div className="row">
            <div className="col-2">
              <div className="round-image">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.UH1XHRYHMJWb2zxHn0IxNAHaEV&pid=Api&P=0&h=180"
                  alt=""
                />
              </div>
            </div>
            <div className="col-10">
              <p className="name_user">tâmmm</p>
              <p className="date">20-10-2020</p>
              <div className="rate">
                <input type="radio" id="star5" name="rate" defaultValue={5} />
                <label htmlFor="star5" title="text" />
                <input type="radio" id="star4" name="rate" defaultValue={4} />
                <label htmlFor="star4" title="text" />
                <input type="radio" id="star3" name="rate" defaultValue={3} />
                <label htmlFor="star3" title="text" />
                <input type="radio" id="star2" name="rate" defaultValue={2} />
                <label htmlFor="star2" title="text" />
                <input type="radio" id="star1" name="rate" defaultValue={1} />
                <label htmlFor="star1" title="text" />
              </div>
              <div className="show_comment">
                <p>aaaaaaaaaaaa</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-2">
              <div className="round-image">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.UH1XHRYHMJWb2zxHn0IxNAHaEV&pid=Api&P=0&h=180"
                  alt=""
                />
              </div>
            </div>
            <div className="col-10">
              <p className="name_user">tâmmm</p>
              <p>20-10-2020</p>
              <div className="rate">
                <input type="radio" id="star5" name="rate" defaultValue={5} />
                <label htmlFor="star5" title="text" />
                <input type="radio" id="star4" name="rate" defaultValue={4} />
                <label htmlFor="star4" title="text" />
                <input type="radio" id="star3" name="rate" defaultValue={3} />
                <label htmlFor="star3" title="text" />
                <input type="radio" id="star2" name="rate" defaultValue={2} />
                <label htmlFor="star2" title="text" />
                <input type="radio" id="star1" name="rate" defaultValue={1} />
                <label htmlFor="star1" title="text" />
              </div>
              <div className="show_comment">
                <p>aaaaaaaaaaaa</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-2">
              <div className="round-image">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.UH1XHRYHMJWb2zxHn0IxNAHaEV&pid=Api&P=0&h=180"
                  alt=""
                />
              </div>
            </div>
            <div className="col-10">
              <p className="name_user">tâmmm</p>
              <p>20-10-2020</p>
              <div className="rate">
                <input type="radio" id="star5" className="rate" defaultValue={5} />
                <label htmlFor="star5" title="text" />
                <input type="radio" id="star4" className="rate" defaultValue={4} />
                <label htmlFor="star4" title="text" />
                <input type="radio" id="star3" className="rate" defaultValue={3} />
                <label htmlFor="star3" title="text" />
                <input type="radio" id="star2" className="rate" defaultValue={2} />
                <label htmlFor="star2" title="text" />
                <input type="radio" id="star1" className="rate" defaultValue={1} />
                <label htmlFor="star1" title="text" />
              </div>
              <div className="show_comment">
                <p>aaaaaaaaaaaa</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rating;
