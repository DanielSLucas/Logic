/* eslint-disable react/no-danger */
import { useCallback } from 'react';
import { FiX } from 'react-icons/fi';
import PrismicDOM from 'prismic-dom';
import Image from 'next/image';

import { IToast, useToast } from '../../../hooks/toasts';

import { Container, Content, ImageContainer } from './styles';

interface ToastProps {
  toast: IToast;
  style: Record<string, unknown>;
}

const Toast: React.FC<ToastProps> = ({ toast, style }) => {
  const { removeToast } = useToast();

  const handleClick = useCallback(() => {
    removeToast(toast.id);
  }, [toast.id, removeToast]);

  return (
    <Container style={style}>
      <header>
        <h2>{toast.title}</h2>
        <button type="button" onClick={handleClick}>
          <FiX />
        </button>
      </header>
      <div className="divider" />
      <Content>
        <div
          dangerouslySetInnerHTML={{
            __html: PrismicDOM.RichText.asHtml(toast.content.data.introduction),
          }}
        />

        <div
          dangerouslySetInnerHTML={{
            __html: PrismicDOM.RichText.asHtml(toast.content.data.image_title),
          }}
        />

        <ImageContainer>
          <div>
            <Image
              src={toast.content.data.main_image.url}
              width={toast.content.data.main_image.dimensions.width}
              height={toast.content.data.main_image.dimensions.height}
            />
          </div>
        </ImageContainer>

        <div
          dangerouslySetInnerHTML={{
            __html: PrismicDOM.RichText.asHtml(
              toast.content.data.truth_table_title,
            ),
          }}
        />

        <div
          dangerouslySetInnerHTML={{
            __html: PrismicDOM.RichText.asText(toast.content.data.truth_table),
          }}
        />

        <div
          dangerouslySetInnerHTML={{
            __html: PrismicDOM.RichText.asHtml(
              toast.content.data.additional_content,
            ),
          }}
        />
      </Content>
    </Container>
  );
};

export default Toast;
