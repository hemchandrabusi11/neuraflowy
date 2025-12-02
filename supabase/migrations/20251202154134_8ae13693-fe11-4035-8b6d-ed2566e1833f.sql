-- 1. Add RLS policy to allow anyone to submit reviews (with approved = false)
CREATE POLICY "Anyone can submit reviews"
ON public.reviews FOR INSERT
TO anon, authenticated
WITH CHECK (approved = false);

-- 2. Create a public view that excludes email for safe public access
CREATE VIEW public.reviews_public AS
SELECT id, name, location, product, rating, comment, 
       image_url, created_at, approved
FROM public.reviews
WHERE approved = true;

-- 3. Grant access to the view
GRANT SELECT ON public.reviews_public TO anon, authenticated;