import {axiosClient} from './axiosClient';

export const login = async (email: string, password: string) => {
  console.log('email', email);
  console.log('password', password);
  const res = await axiosClient.post('/auth/login', {
    email,
    password,
  });
  return res.data;
};

export const register = async (
  name: string,
  phone: any,
  email: string,
  password: string,
  confirmPassword: string,
) => {
  const res = await axiosClient.post('/auth/register', {
    name,
    phone,
    email,
    password,
    confirmPassword,
  });
  return res.data;
};

export const changePassword = async (
  currentPassword: string,
  newPassword: string,
  confirmPassword: string,
) => {
  const res = await axiosClient.post('/auth/changePassword', {
    current_password: currentPassword,
    new_password: newPassword,
    confirm_password: confirmPassword,
  });
  return res.data;
};

export const resetPassword = async (
  resetToken: string,
  newPassword: string,
  confirmPassword: string,
) => {
  const res = await axiosClient.post('/auth/resetPassword', {
    resetToken,
    newPassword,
    confirmPassword,
  });
  return res.data;
};

export const syncContacts = async (contacts: Array<string>) => {
  const res = await axiosClient.post('/auth/syncContacts', {
    contacts,
  });
  return res.data;
};

export const sendOtp = async (email: string) => {
  const res = await axiosClient.post('/auth/sendOtp', {
    email,
  });
  return res.data;
};

export const resendOtp = async (email: string) => {
  const res = await axiosClient.post('/auth/resendOtp', {
    email,
  });
  return res.data;
};

export const verifyOtp = async (email: string, otp: string) => {
  const res = await axiosClient.post('/auth/verifyOtp', {
    email,
    otp,
  });
  return res.data;
};

export const getProfile = async () => {
  const res = await axiosClient.get('/auth/profile');
  return res.data;
};

export const editProfile = async ({full_name, phone, email, address, public_profile, location_sharing, message_request, instagram_sync, contact_sync, notification_type}: any) => {
  const res = await axiosClient.put('/auth/editProfile', {
    full_name,
    phone,
    email,
    address,
    public_profile,
    location_sharing,
    message_request,
    instagram_sync,
    contact_sync,
    notification_type,
  });
  return res.data;
};

export const getAllPosts = async (page = 1, limit = 10) => {
  try {
    const res = await axiosClient.get('/posts', {
      params: {
        type: '1',
        page,
        limit,
      },
    });
    return res.data;
  } catch (error) {
    console.error('Error fetching all posts:', error);
    throw error;
  }
};

export const getFollowingPosts = async (page = 1, limit = 10) => {
  try {
    const res = await axiosClient.get('/posts', {
      params: {
        type: '2',
        page,
        limit,
      },
    });
    return res.data;
  } catch (error) {
    console.error('Error fetching following posts:', error);
    throw error;
  }
};

export const getPostDetails = async (postId: string, page = 1, limit = 10) => {
  console.log('Post details:', postId);
  const res = await axiosClient.get(`/post/${postId}`, {
    params: {
      page: page,
      limit: limit,
    },
  });
  console.log('Post details:', res.data);
  return res.data;
};

export const createPost = async ({country, city, visit_date, reason_for_visit, overall_rating, experience, cost_rating, safety_rating, food_rating, place_type, longitude, latitude} : any) => {
    const res = await axiosClient.post('/post', {
        country,
        city,
        visit_date,
        reason_for_visit,
        overall_rating,
        experience,
        cost_rating,
        safety_rating,
        food_rating,
        place_type,
        longitude,
        latitude,
    });
    return res.data;
};

