import React from 'react';
import classNames from 'classnames/bind';
import styles from '../../../styles/pages/order.module.scss';

const cx = classNames.bind(styles);

function orderContent() {
  // request = 0 : 없음 request = 1 : 있음
  const request = 1;
  const confirm = 1;
  const complete = 1;
  return (
    <>
      <div className={cx('back-ground')} />
      <div className={cx('order-management')}>
        <div className={cx('category-title')}>주문관리</div>
        {request === 1 ? (
          <div className={cx('order-detail')}>
            <div className={cx('drink-info')}>
              <div className={cx('drink-img')}>
                <img src='assets/images/jpg/store.jpg' alt='' />
              </div>
              <div className={cx('drink-detail-box')}>
                <div className={cx('drink-title')}>
                  아이스 블랙 그레이즈드 라데ICE
                </div>
                <div className={cx('drink-detail')}>
                  ICED|Tall|매장컵|에스프레소 샷1|물 많이|얼음 적게|일반휘핑
                  많이|초콜릿 드리즐
                </div>
                <div className={cx('gray')}>
                  <div>고객명</div>
                  <div>닉네임</div>
                </div>
                <div className={cx('gray')}>
                  <div>주문시간</div>
                  <div>
                    <div>15:14:30</div>
                    <div>5분전</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('button-space')}>
              <div>
                <div className={cx('accept')}>주문 수락</div>
                <div className={cx('refusal')}>주문 반려(재고 부족)</div>
              </div>
            </div>
          </div>
        ) : (
          <div className={cx('data-none')}>현재 주문 요청이 없습니다</div>
        )}
      </div>
      <div className={cx('order-state')}>
        <div className={cx('order-request')}>
          <div className={cx('title')}>주문 요청</div>
          <hr />
          {request === 1 ? (
            <div>
              {' '}
              <div className={cx('complete-card')}>
                <div className={cx('drink-title')}>
                  아이스 블랙 그레이즈드 라떼
                </div>
                <div className={cx('drink-detail')}>
                  ICED|Tall|매장컵|에스프레소 샷1|물 많이|얼음 적게|일반휘핑
                  많이|초콜릿 드리즐
                </div>

                <div className={(cx('nickname'), cx('gray'))}>닉네임</div>
                <div className={(cx('order-time'), cx('gray'))}>15:14:30</div>
              </div>
              <hr />
            </div>
          ) : (
            <div className={cx('data-none')}>현재 주문 요청이 없습니다</div>
          )}
        </div>

        <div className={cx('order-confirm')}>
          <div className={cx('title')}>주문 확인</div>
          <hr />
          {confirm === 1 ? (
            <div>
              <div className={cx('complete-card')}>
                <div className={cx('drink-title')}>
                  아이스 블랙 그레이즈드 라떼
                </div>
                <div className={cx('drink-detail')}>
                  ICED|Tall|매장컵|에스프레소 샷1|물 많이|얼음 적게|일반휘핑
                  많이|초콜릿 드리즐
                </div>
                <div className={cx('order-confirm-button-box')}>
                  <div className={cx('nick-name-box')}>
                    <div className={cx('nickname')}>닉네임</div>
                    <div className={cx('order-time')}>15:14:30</div>
                  </div>
                  <button className={cx('confirm-button')} type='button'>
                    완료
                  </button>
                </div>
              </div>
              <hr />
            </div>
          ) : (
            <div className={cx('data-none')}>현재 진행중인 메뉴가 없습니다</div>
          )}
        </div>

        <div className={cx('order-conplete')}>
          <div className={cx('title')}>제조 완료</div>
          <hr />
          {complete === 1 ? (
            <div>
              <div className={cx('complete-card')}>
                <div className={cx('drink-title')}>
                  아이스 블랙 그레이즈드 라떼
                </div>
                <div className={cx('drink-detail')}>
                  ICED|Tall|매장컵|에스프레소 샷1|물 많이|얼음 적게|일반휘핑
                  많이|초콜릿 드리즐
                </div>
                <div className={cx('nick-name-place')}>
                  <div className={cx('nickname')}>닉네임</div>
                  <div className={cx('order-time')}>15:14:30</div>
                </div>
              </div>
              <hr />
            </div>
          ) : (
            <div className={cx('data-none')}>제조 완료된 메뉴가 없습니다</div>
          )}
        </div>
      </div>
    </>
  );
}

export default orderContent;