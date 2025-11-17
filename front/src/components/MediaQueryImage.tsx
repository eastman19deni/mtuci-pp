import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface MediaQueryImageProps {
  mobileHeight?: string;
  tabletHeight?: string;
  desktopHeight?: string;
  className?: string;
}

const MediaQueryImage: React.FC<MediaQueryImageProps> = ({
  mobileHeight = '200px',
  tabletHeight = '300px',
  desktopHeight = '400px',
  className = ''
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('❌ Ошибка загрузки изображения:', e.currentTarget.src);
    setImageError(true);
    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7QndC+0LLRi9C5INGB0L7Qt9C00LDRgtGMINC/0L7QtNGA0L7QsdC90L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LU8L3RleHQ+PC9zdmc+';
  };

  const handleImageLoad = () => {
    console.log('✅ Изображение успешно загружено');
    setImageLoaded(true);
  };

  // Определяем высоту на основе условий
  const height = isMobile ? mobileHeight : isTablet ? tabletHeight : desktopHeight;

  return (
    <div style={{ 
      //border: imageError ? '2px solid red' : '2px solid green', проверка на ошибку картинки 
      margin: '0px',
      position: 'relative'
    }}>
      {!imageLoaded && !imageError && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
          color: '#666'
        }}>
          Загрузка изображения...
        </div>
      )}
      
      <img 
        src="/images/back.jpg"
        alt="Responsive background"
        className={className}
        style={{
          width: '100%',
          height: "100vh",
          objectFit: 'cover',
          display: imageLoaded ? 'block' : 'none'
        }}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default MediaQueryImage;