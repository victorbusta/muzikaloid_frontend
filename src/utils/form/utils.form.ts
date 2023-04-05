export interface IFormData {
  name: string,
  type: string,
  placeholder: string,
  value: string,
}

export const formDataToJson = (formData: IFormData[]) => {
  const jsonData: any = {}

  formData.forEach(data => {
    jsonData[data.name] = data.value;
  })

  return jsonData;
};