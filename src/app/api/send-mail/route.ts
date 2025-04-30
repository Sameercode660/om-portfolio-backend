import {NextRequest, NextResponse} from 'next/server';
import {sendEmail} from '@/lib/sendEmail'; 


export async function POST(req: NextRequest) {
    try {
        
        const {name, email, message} = await req.json();

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json({error: "All fields are required"}, {status: 400});
        }

        await sendEmail({name, email, message});

        return NextResponse.json({statusCode: 200, message: "Email sent successfully", status: true});

    } catch (error) {
        return NextResponse.json({statusCode: 500, message: "Unable to sent the email", status: false, error});
    }
}




