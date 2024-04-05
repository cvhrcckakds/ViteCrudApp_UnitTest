import { render, screen } from '@testing-library/react';
import Form from '.';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

test('formu gönderince "addUser doğru parametrelerle çalışıyor mu?', async () => {
  // fonksiyonu mock'lama (taklit fonksiyonu oluşturma)
  // kaç kez çağrıldı | hangi parametrelerle çağrıldı
  // tarzında testleri yapmamızı sağlayan orj. fonksiyonu taklit eden yapı
  const mockFn = vi.fn();

  // user kurlumu yap
  const user = userEvent.setup();

  // bileşeni ekrana bas
  render(<Form addUser={mockFn} />);

  // 1) gerekli elemanları çağır
  const nameInp = screen.getByLabelText('İsim');
  const mailInp = screen.getByLabelText('Email');
  const ageInp = screen.getByPlaceholderText('ör:24');
  const sendBtn = screen.getByRole('button');

  // 2) inputları doldur

  // yol-1 > isim inputunu doldur
  await user.click(nameInp);
  await user.keyboard('fırat');

  // yol-2 > mail inputunu doldur
  await user.type(mailInp, 'firat@gmail.com');

  // yol-2 > yaş inputunu doldur
  await user.type(ageInp, '59');

  // 3) gönder butonuna tıkla
  await user.click(sendBtn);

  // 4) addUser doğru parametrelerle çağrıldı mı?
  expect(mockFn).toHaveBeenCalledWith({
    name: 'fırat',
    mail: 'firat@gmail.com',
    age: '59',
  });

  // 5) Inputlar temizlendi mi?
  expect(nameInp.value).toBe('');
  expect(mailInp.value).toBe('');
  expect(ageInp.value).toBe('');
});