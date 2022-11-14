export const postData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (response.ok && response.status !== 404) {
      return await response.json();
    } else {
      throw new Error('Error');
    }
  } catch (error) {
    return error;
  }
};
