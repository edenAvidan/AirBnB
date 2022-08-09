import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../stores';
import { stayService } from '../services/stay-service';
import StarRating from '../assets/svgs/star-rating.svg';
import save from '../assets/svgs/save.svg';
import share from '../assets/svgs/share.svg';
import phothNav from '../assets/svgs/photo-nav.svg';
import ImgGallery from '../cmps/ImgGallery';

const StayDetails = () => {
  const { id } = useParams();
  const { app } = useStore();

  const [stay, setStay] = useState();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    getStayById(id);
    // eslint-disable-next-line
  }, [id]);

  const getStayById = async (id) => {
    const stay = await app.getStay(id); // need to actually get stay from DB if not avialable
    setStay(stay);
  };

  return (
    <div className="stay-details main-layout">
      {stay && (
        <>
          <div className="name">{stay.name}</div>
          <div className="details flex justify-between align-center">
            <section className="flex">
              <div className="rating flex">
                <img src={StarRating} className="rating-img" alt="" />
                <span>
                  {stayService.getFormattedRating(stay.reviewScores.rating)} ·
                </span>
              </div>
              <div className="reviews">
                <span className="text underline">
                  {stay.reviews.length} reviews
                </span>
                <span className="dot">·</span>
              </div>
              <div className="underline">{stay.host.location}</div>
            </section>
            <section className="actions flex justify-between align-center">
              <div className="share flex">
                <img src={share} alt="" />{' '}
                <span className="text underline">Share</span>
              </div>
              <div className="save flex">
                <img src={save} alt="" />
                <span className="text underline">Save</span>
              </div>
            </section>
          </div>
          <div className="gallery grid-container">
            {stay.imgUrls.map((url, idx) => {
              return (
                <img
                  key={url}
                  onClick={() => setIsGalleryOpen(true)}
                  className={`area${idx}`}
                  src={require(`../assets/images/${url}`)}
                  alt=""
                />
              );
            })}

            <button
              className="flex align-center"
              onClick={() => setIsGalleryOpen(true)}
            >
              <img className="phothNav" src={phothNav} alt="" />
              Show all photos
            </button>
          </div>
          {isGalleryOpen && <ImgGallery imgs={stay.imgUrls} />}
        </>
      )}
    </div>
  );
};

export default StayDetails;
