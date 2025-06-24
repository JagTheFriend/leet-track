"use client";

import { updateEmailNotificationSettings } from "@/app/(main)/settings/settings-action";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { User } from "@prisma-client";
import { Loader2, Mail } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function EmailNotifications({ userData }: { userData: User }) {
  const [reminder, setReminder] = useState(userData.sendUpcomingReminder);
  const [daily, setDaily] = useState(userData.sendDailyDigest);
  const [weekly, setWeekly] = useState(userData.sendWeeklyReport);

  return (
    <Card className="max-w-full rounded-lg shadow-md dark:bg-[#d1d5db] border dark:border-[#818cf8]">
      <CardHeader className="mt-4 -ml-2">
        <CardTitle className="text-2xl font-bold dark:text-black">
          <div className="flex items-center">
            <Mail className="mt-0.5 mr-1.5 dark:text-black" />
            Email Notifications
          </div>
        </CardTitle>
        <p className="-mt-2 text-xs text-muted-foreground font-semibold">
          Configure when and how you receive email notifications.
        </p>
      </CardHeader>
      <CardContent className="space-y-4.5 -ml-2">
        <div className="flex items-center justify-between -mt-2">
          <div>
            <p className="text-sm font-semibold dark:text-black">Reminder Alerts</p>
            <p className="text-xs text-muted-foreground font-semibold">
              Get notified about upcoming problems
            </p>
          </div>
          <Switch checked={reminder} onCheckedChange={setReminder} />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold dark:text-black">Daily Digest</p>
            <p className="text-xs text-muted-foreground font-semibold">
              Summary of your daily progress
            </p>
          </div>
          <Switch checked={daily} onCheckedChange={setDaily} />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold dark:text-black">Weekly Report</p>
            <p className="text-xs text-muted-foreground font-semibold">
              Weekly progress and statistics
            </p>
          </div>
          <Switch checked={weekly} onCheckedChange={setWeekly} />
        </div>

        <div className="flex justify-between ">
          <div className="ml-auto pb-4">
            <SaveNotificationSettingsButton
              reminder={reminder}
              daily={daily}
              weekly={weekly}
            />
          </div>

        </div>
      </CardContent>
    </Card>
  );
}

function SaveNotificationSettingsButton({
  reminder,
  daily,
  weekly,
}: {
  reminder: boolean;
  daily: boolean;
  weekly: boolean;
}) {
  const { execute, hasErrored, hasSucceeded, isExecuting } = useAction(
    updateEmailNotificationSettings
  );

  useEffect(() => {
    if (hasSucceeded) {
      toast.success("Successfully updated notification settings");
    }

    if (hasErrored) {
      toast.error("Error updating notification settings");
    }
  }, [hasSucceeded, hasErrored]);

  return (
    <Button
      disabled={isExecuting}
      className="rounded"
      onClick={() => {
        execute({
          sendUpcomingReminder: reminder,
          sendDailyDigest: daily,
          sendWeeklyReport: weekly,
        });
      }}
    >
      {!isExecuting ? "Save" : <Loader2 className="animate-spin" />}
    </Button>
  );
}
