import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function FeedbackFormApp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submissions, setSubmissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !feedback) return;

    const newSubmission = {
      id: Date.now(),
      name,
      email,
      feedback,
    };

    setSubmissions([newSubmission, ...submissions]);
    setName("");
    setEmail("");
    setFeedback("");
  };

  return (
    <div className="min-h-screen flex items-start justify-center p-6 bg-muted/40">
      <div className="w-full max-w-xl space-y-6">
        {/* Feedback Form */}
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Feedback Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Textarea
                placeholder="Your Feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <Button type="submit" className="w-full">
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Submitted Feedback */}
        {submissions.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Submitted Feedback</h2>
            {submissions.map((item) => (
              <Card key={item.id} className="rounded-2xl">
                <CardContent className="pt-4 space-y-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.email}</p>
                  <p className="mt-2">{item.feedback}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
