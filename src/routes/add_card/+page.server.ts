
export const actions: Actions = {
    default: async ({ request, locals}) => {
        const form = await request.formData();
     
      console.log(form);
 
  
    },};