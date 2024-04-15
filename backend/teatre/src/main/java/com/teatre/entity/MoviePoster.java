package com.teatre.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
 
@Entity
public class MoviePoster { 
	    @Id
//	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private Long movie_id;
	    private String movie_name;
	    private String img;
		public Long getMovie_id() {
			return movie_id;
		}
		public void setMovie_id(Long movie_id) {
			this.movie_id = movie_id;
		}
		public String getMovie_name() {
			return movie_name;
		}
		public void setMovie_name(String movie_name) {
			this.movie_name = movie_name;
		}
		public String getImg() {
			return img;
		}
		public void setImg(String img) {
			this.img = img;
		}
		@Override
		public String toString() {
			return "MoviePoster [movie_id=" + movie_id + ", movie_name=" + movie_name + ", img=" + img + "]";
		}
		 
	    // getters and setters
}


