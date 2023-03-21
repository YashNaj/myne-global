import type { RequestHandler } from "@sveltejs/kit";
import { redis } from "$lib/server/redis";
import { supabase } from "$lib/supabaseClient";


export const GET: RequestHandler = async (request) => {
  const path = request.query.get('path');

  try {
    return new Promise((resolve, reject) => {
      redis.get(`image:${path}`, async (err, cachedUrl) => {
        if (err) {
          reject(err);
        }

        if (cachedUrl) {
          resolve({ body: { url: cachedUrl }, status: 200 });
        } else {
          const { data, error } = await supabase.storage.from("card-images").download(path);

          if (error) {
            reject(error);
          }

          const url = URL.createObjectURL(data);
          redis.setex(`image:${path}`, 60 * 60, url);
          resolve({ body: { url }, status: 200 });
        }
      });
    });
  } catch (error) {
    return { status: 500, body: { error: error.message } };
  }
};



