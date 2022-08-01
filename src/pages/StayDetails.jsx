import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../stores';
// import { observer } from 'mobx-react-lite';
import { stayService } from '../services/stay-service';
import StarRating from '../assets/svgs/star-rating.svg';
import save from '../assets/svgs/save.svg';
import share from '../assets/svgs/share.svg';

const StayDetails = () => {
  const { id } = useParams();
  const { app } = useStore();

  const [stay, setStay] = useState();

  useEffect(() => {
    getStayById(id);
    // eslint-disable-next-line
  }, [id]);

  const getStayById = async (id) => {
    const stay = await app.getStay(id);
    setStay(stay);
  };

  return (
    <div className="stay-details main-layout">
      {stay && (
        <>
          <div className="name">{stay.name}</div>
          <div className="details flex justify-between">
            <section className="flex">
              <div className="rating flex">
                <img src={StarRating} className="rating-img" alt="" />
                <span>
                  {stayService.getFormattedRating(stay.reviewScores.rating)} ·
                </span>
              </div>
              <div className="reviews">
                <sapn className="text underline">
                  {stay.reviews.length} reviews
                </sapn>
                <span className="dot">·</span>
              </div>
              <div className="underline">{stay.host.location}</div>
            </section>
            <section className="actions flex justify-between">
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
        </>
      )}
    </div>
  );
};

// export default observer(StayDetails);
export default StayDetails;
