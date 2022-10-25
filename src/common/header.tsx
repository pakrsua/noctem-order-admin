import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import toast from 'react-hot-toast';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import styles from '../../styles/common/header.module.scss';
import { getStoreInfo } from '../store/api/store';
import { getToken, isExistToken, removeToken } from '../store/utils/token';
import { IStore } from '../types/store.d';

interface IProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

function header({ setIsLogin }: IProps) {
  const [storeInfo, setStoreInfo] = useState<IStore>();
  const cx = classNames.bind(styles);
  const router = useRouter();

  dayjs.locale('ko');
  const date = dayjs(new Date()).format('YYYY년 M월 D일');
  const time = dayjs(new Date()).format('A h시 m분');

  useEffect(() => {
    if (getToken() !== null && getToken() !== '{}') {
      getStoreInfo()
        .then(res => {
          setStoreInfo(res.data.data);
        })
        .catch(err => console.log(err));
    } else {
      toast.error('로그인이 필요한 서비스입니다.');
    }
  }, []);

  const handleLogout = () => {
    if (isExistToken()) {
      removeToken();
      setIsLogin(false);
      toast.success('로그아웃 되셨습니다.');
    }
  };

  return (
    <header className={cx('wrap')}>
      <ul>
        <li>{date}</li>
        <li>{time}</li>
        <li className={cx('profile-wrap')}>
          <button type='button'>
            <span className={cx('img-wrap')}>
              <img src={storeInfo?.mainImg} alt={storeInfo?.name} />
            </span>
            <span>{storeInfo?.name}</span>
          </button>
        </li>
        <li>
          <button
            type='button'
            className={cx('logout-btn')}
            onClick={handleLogout}
          >
            로그아웃
          </button>
        </li>
        <li className={cx('alert-wrap')}>
          <button type='button' className={cx('active')} aria-label='alery'>
            <span>
              <Image src='/assets/svg/icon-alert.svg' width={23} height={23} />
            </span>
          </button>
        </li>
      </ul>
    </header>
  );
}

export default header;
